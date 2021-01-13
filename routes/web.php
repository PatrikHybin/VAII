<?php

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


Route::get('/home', [App\Http\Controllers\BookController::class, 'home'])->name('home');
Route::get('/book', [App\Http\Controllers\BookController::class, 'index'])->name('homeBook');
Route::get('/book/{book}/info', [BookController::class , 'show'])->name('book.info');

/*Route::get('/book', function () {
    return view('book.index');
});*/

Route::group(['middleware' => ['auth']], function () {
    Route::resource('book', BookController::class);
    Route::get('/book/{book}/delete', [BookController::class , 'destroy'])->name('book.delete');
    Route::get('/book/{book}/info', [BookController::class , 'show'])->name('book.info');
    Route::get('/book/{book}/edit', [BookController::class , 'edit'])->name('book.editBook');

    Route::resource('user', UserController::class);
    Route::get('/user/{user}/delete', [UserController::class , 'destroy'])->name('user.delete');
});


