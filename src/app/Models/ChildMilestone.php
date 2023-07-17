<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\Milestone;
use app\Models\GrandchildMilestone;

class ChildMilestone extends Model
{
    use HasFactory;

    protected $table = 'child_milestones';

    protected $guarded = [
        'created_at',
        'updated_at',
    ];

    /**
     * (親)マイルストーン
     */
    public function milestone()
    {
        return $this->belongsTo(Milestone::class);
    }

    /**
     * 孫マイルストーン
     */
    public function grandchild_milestones()
    {
        return $this->hasMany(GrandchildMilestone::class);
    }
}
