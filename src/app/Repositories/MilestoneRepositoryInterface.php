<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Milestone;
use App\Models\User;
use Illuminate\Support\Collection;


interface MilestoneRepositoryInterface
{
    public function storeMilestone(User $user, array $milestone): bool;

    public function updateMilestone(User $user, array $milestone): bool;

    public function deleteMilestone(Milestone $milestone): bool;

    public function fetchAllMilestone(User $user): Collection;

    public function findMilestone(Milestone $milestone): Milestone;


}