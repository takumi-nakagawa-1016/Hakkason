<?php

declare(strict_types=1);

namespace app\Repositories;

use App\Models\User;

interface UserRepositoryInterface
{
    public function fetchAuthUser();
}