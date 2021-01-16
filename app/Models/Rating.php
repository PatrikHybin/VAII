<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = [
        'rating',
        'user_id',
        'book_id'
    ];

    protected $casts = [
        'created_at' => 'datetime'
    ];

    public function getAverageRating(int $book_id){
        $average_rating = Rating::query()->where('id', $book_id)->sum('rating')/(Rating::query()->where('id', $book_id)->count('rating'));
        return $average_rating;
    }
}
