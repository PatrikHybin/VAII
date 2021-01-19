@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center liList">
                            <div class="col-12">
                                <h4>News</h4>
                            </div>
                        </li>
                        @foreach($books as $book)
                        <li class="list-group-item d-flex justify-content-between align-items-center liList">

                                    <a href="{{ route('book.info',[$book->id]) }}" class="alist list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        <div class="col-2 homebookimg">
                                            <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover">
                                        </div>
                                        <div class="col-10 mb-3 homebookname">
                                            <p>{{ $book->name }}</p>
                                        </div>
                                    </a>

                        </li>
                        @endforeach


                        <li class="list-group-item d-flex justify-content-between align-items-center liList">
                            <div class="col-10">
                                <h4>Popular</h4>

                            </div>
                            <div class="col-2">
                                <h4>Number of views</h4>

                            </div>
                        </li>


                        @foreach($booksNumbers as $book)
                            <li class="list-group-item d-flex justify-content-between align-items-center liList">

                                <a href="{{ route('book.info',[$book->id]) }}" class="alist list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <div class="col-2 homebookimg">
                                        <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover">
                                    </div>
                                    <div class="col-8 mb-3 homebookname">
                                        <p>{{ $book->name }}</p>
                                    </div>
                                    <div class="col-2 homebookstats">
                                        {{ $book->view_number }}
                                    </div>
                                </a>

                            </li>
                        @endforeach


                        <li class="list-group-item d-flex justify-content-between align-items-center liList">
                            <div class="col-10">
                                <h4>Best rated</h4>

                            </div>
                            <div class="col-2">
                                <h4>Rating</h4>

                            </div>
                        </li>


                        @foreach($booksRate as $book)
                            <li class="list-group-item d-flex justify-content-between align-items-center liList">

                                <a href="{{ route('book.info',[$book->book_id]) }}" class="alist list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <div class="col-2 homebookimg">
                                        <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover" width="140px" height="186px">
                                    </div>
                                    <div class="col-8 mb-3 homebookname">
                                        <p>{{ $book->name }}</p>
                                    </div>
                                    <div class="col-2 homebookstats">
                                        {{ $book->averageRating }}
                                    </div>
                                </a>

                            </li>
                        @endforeach
                    </ul>

            </div>
        </div>
    </div>
</div>
@endsection
