<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Milestone;
use App\Models\User;
use PHPUnit\Util\Json;

interface MilestoneServiceInterface
{
    public function storeMilestone(
        string $name,
        string $description,
        string $duedate,
    ): bool;

    public function updateMilestone(
        string $id,
        string $name,
        string $description,
        string $status,
        string $duedate,
    ): bool;

    public function deleteMilestone(Milestone $milestone): bool;

    public function fetchUserMilestone(): string;

    public function findMilestone(Milestone $milestone): Milestone;
}