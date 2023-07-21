<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\ChildMilestone;
use App\Models\Milestone;

interface ChildMilestoneRepositoryInterface
{
    public function storeChild(
        array $childMilestone,
    ): bool;

    public function updateChild(
        array $childMilestone,
    ): bool;

    public function deleteChild(
        ChildMilestone $childMilestone,
    ): bool;

    public function findChild(
        string $childId,
    ): ChildMilestone;
}