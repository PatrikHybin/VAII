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
                        <div class="col-sm-3 mb-5 embed-responsive">
                            <a href="{{ route('book.info',[$book->id]) }}">
                            <div>
                                <img src="{{ $book->image }}" class="ml-0 embed-responsive-4by3" height="186px" width="140px">
                                <br>
                                <h5 id="books-list-text" class="">
                                    {{ $book->name }}
                                </h5>
                                <a id="delete-button-book-list" href={{ route('book.delete', [$book->id]) }} title="Delete" data-method="DELETE" class="btn btn-sm btn-danger" data-confrim="Are you sure?">Delete</a>
                            </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            @endforeach
        </div>
        </div>

    </div>
@endsection
