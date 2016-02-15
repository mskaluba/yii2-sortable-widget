<?php

namespace wus1\yii2sortable;

use yii\base\Widget;
use yii\helpers\Url;

class Sortable extends Widget
{
    /** @var string|array Sort action */
    public $sortableAction = ['sort'];

    public function init()
    {

        parent::init();
        $this->sortableAction = Url::to($this->sortableAction);
    }

    public function run()
    {
        $this->registerWidget();

        parent::run();
    }

    protected function registerWidget()
    {
        $view = $this->getView();
        $view->registerJs("jQuery('#{$this->id}').SortableGridView('{$this->sortableAction}');");
        SortableAsset::register($view);
    }
}
