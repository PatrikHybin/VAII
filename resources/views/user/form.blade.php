

<form method="post" action="{{ $action }}">
    @csrf
    @method($method)
    <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Full name" value="{{ old('name' , @$model->name )}}">
    </div>
    @error('name')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value="{{ old('email' , @$model->email) }}">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    @error('email')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Password">
    </div>
    @error('password')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    <div class="form-group">
        <label for="password">Password Again</label>
        <input type="password" class="form-control" id="password" name="password_confirmation" placeholder="Password">
    </div>
    @error('password_confirmation')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
