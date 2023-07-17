<?php

namespace App\Providers;

use App\Repositories\MilestoneRepository;
use App\Repositories\MilestoneRepositoryInterface;
use app\Repositories\UserRepository;
use app\Repositories\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserRepositoryInterface::class, [UserRepository::class]);
        $this->app->bind(MilestoneRepositoryInterface::class, [MilestoneRepository::class]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
