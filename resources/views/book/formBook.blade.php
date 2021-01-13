<div class="form-group text-danger">
    @foreach ($errors->all() as $error)
        {{ $error }}<br>
    @endforeach
</div>

<form method="post" action="{{ $action }}" enctype="multipart/form-data">
    @csrf
    @method($method)

        <div class="form-group">
            <label for="name">Book Name</label><br>
            <input class="col-md-12" type="text" id="name" name="name" placeholder="Book name" value="{{ @$model->name }}">
        </div>

        <div class="form-group">
            <label>Description</label><br>
            <textarea class="col-md-12" name="text" rows="4" id="text" placeholder="Book description">{{ @$model->text }}</textarea>
        </div>

        <div class="form-group">
            <label>Input image url</label><br>
            <input type="text" id="image" name="image" value="{{ @$model->image }}" placeholder="Enter image url">
        </div>
        <div>
            <button type="submit" class="btn btn-primary btn-accent">
        @if($method === 'put')
            Edit Book
        @endif
        @if($method === 'post')
            Create Book
        @endif
            </button>
        </div>
</form>

