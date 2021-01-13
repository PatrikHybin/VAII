<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'text',
        'image',
        'user_id'
    ];

    protected $casts = [
        'created_at' => 'datetime'
    ];


}
