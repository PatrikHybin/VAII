<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Integer;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'text',
        'image',
        'view_number',
        'user_id'
    ];

    protected $hidden = [
        'image',

    ];

    protected $casts = [
        'created_at' => 'datetime'
    ];

    public function getUser(int $user_id) {
        return User::query()->find($user_id);
    }

    public function averageRating(int $id) {
        $book = Rating::query()->where('book_id','=', $id);
        $rating = $book->sum('rating')/$book->count();
        return  $rating;
    }

    public function ratings() {
        return $this->hasMany('Rating');
    }

}
