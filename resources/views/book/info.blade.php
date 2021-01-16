@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ @$model->name }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <div>
                            <img src="{{ @$model->image }}" width="250px" height="300px">
                            <div>
                                {{ @$model->text }}
                            </div>
                            <div class="mb-3">
                                <a href="{{ route('book.editBook', [@$model->id]) }}" class="btn btn-sm btn-dark" role="button">Edit book</a>
                            </div>
                        </div>

                        <div id="get_rating">

                        </div>
                        <script>
                            var user = {!! auth()->user()->toJson() !!};
                            var book = {!! \App\Models\Book::query()->find(@$model) !!};
                        </script>
                        <script src="{{ asset('js/rating.js') }}" defer></script>
                        <script src="http://code.jquery.com/jquery-3.4.1.js"></script>


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
