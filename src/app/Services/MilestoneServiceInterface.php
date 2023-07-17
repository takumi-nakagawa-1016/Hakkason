<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Milestone;
use App\Models\User;
use Illuminate\Support\Collection;

interface MilestoneServiceInterface
{
    public function storeMilestone(array $milestone): bool;

    public function updateMilestone(array $milestone): bool;

    public function deleteMilestone(Milestone $milestone): bool;

    public function fetchUserMilestone(User $uesr): Collection;

    public function findMilestone(Milestone $milestone): Milestone;
}