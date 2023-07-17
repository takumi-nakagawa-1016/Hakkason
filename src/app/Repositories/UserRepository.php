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
        return Auth::user();
    }
}