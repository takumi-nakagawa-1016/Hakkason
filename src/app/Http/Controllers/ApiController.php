<?php

namespace App\Http\Controllers;

class ApiController extends Controller
{
    public function getData()
    {
        $data = 'オラァ！';

        return response()->json($data);
    }
}
