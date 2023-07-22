<?php

namespace App\Providers;

use App\Repositories\MilestoneRepository;
use App\Repositories\MilestoneRepositoryInterface;
use App\Repositories\UserRepository;
use App\Repositories\UserRepositoryInterface;
use App\Services\MilestoneService;
use App\Services\MilestoneServiceInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //        Repository系
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(MilestoneRepositoryInterface::class, MilestoneRepository::class);

        //        Service系
        $this->app->bind(MilestoneServiceInterface::class, MilestoneService::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
