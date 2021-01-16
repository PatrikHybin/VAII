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

                    <div class="row">
                        <div class="col-12">
                            <h4>News</h4>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <hr class = "horizontal">
                        </div>
                    </div>


                    @foreach($books as $book)
                        <div class="row">
                            <a href="{{ route('book.info',[$book->id]) }}">
                                <div class="col-2 mb-3">
                                    <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover" width="140px" height="186px">
                                </div>
                                <div class="col-10 mb-3">
                                    <p>{{ $book->name }}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                    <br>

                    <div class="row">
                        <div class="col-12">
                            <h4>Trending</h4>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <hr class = "horizontal">
                        </div>
                    </div>

                    @foreach($books as $book)
                        <div class="row">
                            <a href="{{ route('book.info',[$book->id]) }}">
                                <div class="col-2 mb-3">
                                    <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover" width="140px" height="186px">
                                </div>
                                <div class="col-10 mb-3">
                                    <p>{{ $book->name }}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach


                    <br>

                    <div class="row">
                        <div class="col-10">
                            <h4>Popular</h4>

                        </div>
                        <div class="col-2">
                            <h4>Number of views</h4>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <hr class = "horizontal">
                        </div>
                    </div>

                    @foreach($booksNumbers as $book)
                        <div class="row">
                            <a href="{{ route('book.info',[$book->id]) }}">
                                <div class="col-2 mb-3">
                                    <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover">
                                </div>
                                <div class="col-8 mb-3">
                                    <p>{{ $book->name }}</p>
                                </div>

                            </a>
                            <div class="col-2">
                                {{ $book->view_number }}
                            </div>
                        </div>
                    @endforeach


                    <br>

                    <div class="row">
                        <div class="col-10">
                            <h4>Best rated</h4>

                        </div>
                        <div class="col-2">
                            <h4>Rating</h4>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <hr class = "horizontal">
                        </div>
                    </div>

                    @foreach($books as $book)
                        <div class="row">
                            <a href="{{ route('book.info',[$book->id]) }}">
                                <div class="col-2 mb-3">
                                    <img src="{{ $book->image }}" alt="Image of book cover" class ="bookCover" width="140px" height="186px">
                                </div>
                                <div class="col-8 mb-3">
                                    <p>{{ $book->name }}</p>
                                </div>

                            </a>
                            <div class="col-2">
                                {{ $book->averageRating($book->id) }}
                            </div>
                        </div>
                    @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
