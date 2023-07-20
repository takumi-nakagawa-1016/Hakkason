<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserRepositoryInterface
{
    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function fetchAuthUser()
    {
        return User::query()
            ->find(1)
            ->first();

        //        Todo 検証環境のため処理が異なります。
        //        return Auth::user();
    }
}
