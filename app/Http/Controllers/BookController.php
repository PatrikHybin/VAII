<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function PHPUnit\Framework\stringContains;
use function Sodium\increment;

class BookController extends Controller
{
    /*public function __construct()
    {
        //$this->middleware('auth', ['except' => [
        //    'index',
        //]]);
        $this->authorizeResource(Book::class, 'book');
    }*/

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $books = Book::all();

        return view('book.index', [
            'books' => $books
        ]);

    }

    public function home(Request $request)
    {
        $books = Book::all()->sortByDesc('created_at')->take(3);
        $booksNumbers = Book::all()->sortByDesc('view_number')->take(3);
        //$bookIDs = Rating::query()->select('book_id')->orderByDesc('rating')->take(3);

        $booksRate = DB::table('books')->join('ratings','books.id','=','book_id')
            ->select(DB::raw('books.*,ratings.*,FORMAT(SUM(rating)/COUNT(rating),0) as averageRating'))
            ->orderByDesc('averageRating')->groupBy('ratings.book_id')->take(3)->get();

        return view('home', [
            'books' => $books,
            'booksNumbers' => $booksNumbers,
            'booksRate' => $booksRate
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function create()
    {
        return view('book.createBook', [
            'action' => route('book.store'),
            'method' => 'post'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'text' => 'required|string',
        ]);


        $book = Book::create([
            'name' => $request->get('name'),
            'text' => $request->get('text'),
            'image' => $request->get('image'),
            'user_id' => auth()->id()

        ]);

        if ($book['image'] == NULL) {
            $book->update([
                'image' => 'https://image.freepik.com/free-vector/black-blank-book-cover-isolated-transparent_168129-46.jpg'
            ]);
        }


        $book->save();
        return redirect()->route('book.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function show(Book $book)
    {


        $book->update([
            'view_number' => $book['view_number'] + 1
        ]);

        return view('book.info', [
            'model' => $book
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        return view( 'book.editBook', [
            'action' => route('book.update', $book->id),
            'method' => 'put',
            'model' => $book
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'text' => 'required|string',
        ]);


        $book->update([
            'name' => $request->get('name'),
            'text' => $request->get('text'),
            'image' => $request->get('image')
        ]);

        if ($book['image'] == NULL) {
            $book->update([
                'image' => 'https://image.freepik.com/free-vector/black-blank-book-cover-isolated-transparent_168129-46.jpg'
            ]);
        }

        return redirect()->route('book.info', [$book->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('book.index');
    }
}
