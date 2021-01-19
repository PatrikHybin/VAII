<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Rating;
use App\Models\User;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;
use Psy\Util\Json;
use function MongoDB\BSON\toJSON;

class RatingController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(Rating::class, 'rating');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function show(Rating $rating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function edit(Rating $rating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rating $rating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rating $rating)
    {
        //
    }

    public function ajaxGetRating() {
        try {
            if (Rating::all()->where('book_id', '=', $_GET['bookID'])->count() !== 0) {
                $book = Rating::all()->where('book_id', '=', $_GET['bookID']);
                $ratingSum = $book->sum('rating');
                $ratingCount = $book->count('rating');

                $average_rating = $ratingSum / $ratingCount;
                $rating = JSON::encode([
                    'average_rating' => ($average_rating != 0) ? $average_rating : "undefined",
                    'user_rating' =>  ($book->where('user_id','=',$_GET['userID'])->sum('rating') != 0) ? $book->where('user_id','=',$_GET['userID'])->sum('rating') : "undefined",
                    'number_of_ratings' => ($ratingCount != 0) ? $ratingCount : "undefined",
                ]);
                return response()->json($rating);
            } else {
                $rating = JSON::encode("nieco:d");
                return response()->json($rating);
            }

        } catch (Exception $exception) {

        }

    }

    public function ajaxSetRating() {
        Rating::query()->updateOrCreate(['user_id' => $_POST['userID'],'book_id' => $_POST['bookID']],['rating' => $_POST['rating']]);

    }
}
