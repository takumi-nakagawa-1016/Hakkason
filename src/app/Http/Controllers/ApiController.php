<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getData()
    {
        $data = 'オラァ！';

        return response()->json($data);
    }

    public function post(Request $request)
    {
        $data = 'オラァ！';

        return response()->json($request);
    }
}
