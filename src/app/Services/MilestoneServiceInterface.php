<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Milestone;

interface MilestoneServiceInterface
{
    public function storeMilestone(
        string $name,
        string $description,
        string $dueDate,
    ): bool;

    public function updateMilestone(
        string $id,
        string $name,
        string $description,
        string $status,
        string $dueDate,
    ): bool;

    public function deleteMilestone(string $id): bool;

    public function fetchUserMilestone(): string;

    public function findMilestone(Milestone $milestone): Milestone;
}
