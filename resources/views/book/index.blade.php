@extends('layouts.app')

@section('content')
    <div class="container">

        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            @can('create', \App\Models\Book::class)
                <div class="mb-3">
                    <a href="{{ route('book.create') }}" class="btn btn-sm btn-success" role="button">Add new book</a>
                </div>
            @endcan


        <div>
            @foreach ($books->chunk(4) as $chunk)
                <div class="row ">
                    @foreach ($chunk as $book)
                        <div class="col-sm-3 mb-4 embed-responsive">
                            <div class="card bookslistcard">
                                <a href="{{ route('book.info',[$book->id]) }}">
                                    <div>
                                        <img src="{{ $book->image }}" class="bookslistimage">
                                        <br>
                                        <a class="bookslisttext">
                                            {{ $book->name }}
                                        </a>
                                        <br>
                                        <a href={{ route('book.delete', [$book->id]) }} title="Delete" data-method="DELETE" class="btn btn-sm btn-danger bookslistdelete" data-confrim="Are you sure?">Delete</a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endforeach
        </div>
        </div>

    </div>
@endsection
