<?php

namespace App\Http\Controllers;


use Aginev\Datagrid\Datagrid;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use function MongoDB\BSON\toJSON;

class UserController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::paginate(25);

        /*$grid = new Datagrid($users, $request->get('f', []));

        $grid->setColumn('name', 'Full Name')
            ->setColumn('email', 'Email')
            ->setActionColumn([
                'wrapper' => function($value, $row) {
                    return '<a href="' . route('user.edit', [$row->id]) . '"title="Edit" class="btn btn-sm btn-primary">Edit</a>
                            <a href="' . route('user.delete', [$row->id]) . '"title="Delete" data-method="DELETE" class="btn btn-sm btn-danger" data-confrim="Are you sure?">Delete</a>';
                }
            ]);*/

        return view('user.index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function create()
    {
        return view('user.create', [
           'action' => route('user.store'),
           'method' => 'post'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:4|confirmed'
        ]);

        /*$user = User::create([
           'name' => $request->get('name'),
           'email' => $request->get('email'),
           'password' => $request->get('password'),
           'password_confirm' => $request->get('password_confirm'),
           'created_at' => Carbon::now()
       ]);*/

        $user = User::create($request->all());
        $user->save();
        return redirect()->route('user.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $user->password = '';
        return view( 'user.edit', [
           'action' => route('user.update', $user->id),
           'method' => 'put',
           'model' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
         $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'required|min:4|confirmed'
        ]);


        $user->update($request->all());
        return redirect()->route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('user.index');
    }

    public function ajaxChangeRole() {

        $user = User::find($_POST['userID']);
        $user->update([
            'role' => $_POST['role']
        ]);

        //return $_POST;
    }

    public function usersList(Request $request) {

        $users = User::all();
        return response()->json($users);
    }
}
