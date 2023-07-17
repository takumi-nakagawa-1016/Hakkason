<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('grandchild_milestones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('child_milestone_id')->constrained('child_milestones')->comments('子マイルストーンID');
            $table->string('name')->comments('マイルストーン名');
            $table->string('description')->nullable()->comments('詳細');
            $table->integer('status')->comments('ステータス');
            $table->datetime('due_date')->comments('期限');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grandchild_milestone_tables');
    }
};
