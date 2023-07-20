<?php

namespace App\Models;

use app\Models\ChildMilestone;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrandchildMilestone extends Model
{
    use HasFactory;

    protected $table = 'grandchild_milestones';

    protected $guarded = [
        'created_at',
        'updated_at',
    ];

    /**
     * 子マイルストーン
     */
    public function child_milestone()
    {
        return $this->belongsTo(ChildMilestone::class);
    }
}
