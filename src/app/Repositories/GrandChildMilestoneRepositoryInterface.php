<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\GrandchildMilestone;
use Illuminate\Support\Collection;

interface GrandChildMilestoneRepositoryInterface
{
    public function storeGrandChild(array $grandChild): bool;

    public function updateGrandChild(GrandchildMilestone $grandChild): bool;

    public function deleteGrandChild(GrandchildMilestone $grandChild): bool;

    public function findGrandChild(string $id): GrandchildMilestone;

    public function fetchGrandChildOfChild(string $childMilestoneId): Collection;
}