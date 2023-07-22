<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\ChildMilestone;
use App\Models\Milestone;
use Illuminate\Support\Collection;

interface ChildMilestoneRepositoryInterface
{
    public function storeChild(
        array $childMilestone,
    ): bool;

    public function updateChild(
        ChildMilestone $childMilestone,
    ): bool;

    public function deleteChild(
        ChildMilestone $childMilestone,
    ): bool;

    public function findChild(
        string $childId,
    ): ChildMilestone;

    public function fetchChildMilestones(
        Collection $milestones
    ): Collection;
}