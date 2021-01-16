@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('Users') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        @can('create', \App\Models\User::class)
                            <div class="mb-3">
                                <a href="{{ route('user.create') }}" class="btn btn-sm btn-success" role="button">Add new user</a>
                            </div>
                        @endcan
                            <div id="notifDiv">

                            </div>

                            <div id="get_users">

                            </div>
                            <script>
                                var user = {!! auth()->user()->toJson() !!};
                            </script>
                            <script src="{{ asset('js/users.js') }}" defer></script>
                            <script src="http://code.jquery.com/jquery-3.4.1.js"></script>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


