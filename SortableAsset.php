<?php
namespace wus1\yii2sortable;

use yii\web\AssetBundle;

class SortableAsset extends AssetBundle
{
    public $sourcePath = '@vendor/wus1/yii2-sortable-widget/assets';

    public $js = [
        'js/jquery.sortable.gridview.js',
    ];

    public $depends = [
        'yii\jui\JuiAsset',
    ];
}
