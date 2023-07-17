<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use app\Models\ChildMilestone;

class Milestone extends Model
{
    use HasFactory;

    protected $table = 'milestones';

    protected $guarded = [
        'created_at',
        'updated_at',
    ];

    /**
     * 子マイルストーン
     */
    public function child_milestones()
    {
        return $this->hasMany(ChildMilestone::class);
    }
    /**
     * @return BelongsTo
     */
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
