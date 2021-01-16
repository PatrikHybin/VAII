<?php

use App\Http\Controllers\RatingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();


Route::get('/home', [BookController::class, 'home'])->name('home');
Route::resource('book', BookController::class);
Route::get('/book', [BookController::class, 'index'])->name('book.index');
Route::get('/book/{book}/info', [BookController::class , 'show'])->name('book.info');

Route::resource('rating', RatingController::class);
Route::post('/book/{book}/ajaxSetRating', [RatingController::class, 'ajaxSetRating'])->name('rating.ajaxSetRating');
Route::get('/book/{book}/ajaxGetRating', [RatingController::class, 'ajaxGetRating'])->name('rating.ajaxGetRating');

/*Route::get('/book', function () {
    return view('book.index');
});*/

//Route::post('ajaxChangeRole',[UserController::class , 'ajaxChangeRole'])->name('user.ajaxChangeRole');


Route::group(['middleware' => ['auth']], function () {
    Route::get('/book/{book}/delete', [BookController::class , 'destroy'])->name('book.delete');
    Route::get('/book/{book}/edit', [BookController::class , 'edit'])->name('book.editBook');

    Route::resource('user', UserController::class);
    Route::get('/user/{user}/delete', [UserController::class , 'destroy'])->name('user.delete');

    Route::post('/ajaxChangeRole', [UserController::class, 'ajaxChangeRole'])->name('user.ajaxChangeRole');
    Route::get('/usersList', [UserController::class, 'usersList'])->name('user.usersList');


});


