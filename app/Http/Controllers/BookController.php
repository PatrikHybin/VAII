<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use function PHPUnit\Framework\stringContains;

class BookController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth', ['except' => [
        //    'index',
        //]]);
        $this->authorizeResource(Book::class, 'book');
    }


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

        return view('home', [
            'books' => $books
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

        return redirect()->route('book.index');
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
