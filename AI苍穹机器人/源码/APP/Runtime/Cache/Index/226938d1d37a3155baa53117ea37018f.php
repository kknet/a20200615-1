<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>

<html class="pixel-ratio-3 retina android android-5 android-5-0 watch-active-state"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <title>收益</title>

    <link rel="stylesheet" href="/Public/dianyun/css/framework7.ios.min.css">
    <link rel="stylesheet" href="/Public/dianyun/css/app.css">
    <link rel="stylesheet" href="/Public/dianyun/css/iconfont.css">


  </head>
  <body onload="onload()" class="framework7-root">
    <div class="panel-overlay"></div>
	<div class="panel panel-left panel-reveal layout-dark">	    
	</div>
	
    <div class="views">
      <div class="view view-main" data-page="mypurse">
        <div class="pages">
          <div data-page="mypurse" class="page navbar-fixed" isinited="true">
    <div class="navbar">
        <div class="navbar-inner">
            <div class="left">
                <a href="javascript:history.go(-1);" class="external link"> <i class="icon iconfont icon-angleleft" style="transform: translate3d(0px, 0px, 0px);"></i>返回</a>
            </div>
            <div class="center" style="left: -10px;">我的收益</div>
            <div class="right">
                <a href="<?php echo U('Index/Wallet/withdrawn');?>" class="external">提现</a>
            </div>
        </div>
    </div>

    <div class="page-content infinite-scroll">
        <div class="area-10">
            <div class="space-10"></div>
            <div class="mypurseinfo">
                <div class="row">
                    <div class="col-33">
                        <div>
                            <img src="/Public/dianyun/img/icon-shouyi.png">
                        </div>
                        <p id="lblIncome" class="moneytext"><?php echo ($shouyi); ?></p>
                        <p class="desctext">总收益</p>
                    </div>

                    <div class="col-33">
                        <div>
                            <img src="/Public/dianyun/img/icon-yue.png">
                        </div>
                        <p class="moneytext"><?php echo ($yue); ?></p>
                        <p class="desctext">帐户余额</p>
                    </div>

                    <div class="col-33">
                        <div>
                            <img src="/Public/dianyun/img/icon-shouyi.png">
                        </div>
                        <p class="moneytext"><?php echo ($yiti); ?></p>
                        <p class="desctext">已提现</p>
                    </div>

                </div>
            </div>
        </div>

        <div class="space-10 bg-gray"></div>
        <div class="space-10"></div>

        <div class="center">
            <div class="row mypursedetail-tabA">
                <div class="col-33">
                    <a id="tabA0" href="<?php echo U('Index/Wallet/award');?>" class="">全部</a>
                </div>
                <div class="col-33">
                    <a id="tabA1" href="<?php echo U('Index/Wallet/llaward');?>" class="">流量收入</a>
                </div>
                <div class="col-33">
                    <a id="tabA2" href="<?php echo U('Index/Wallet/tgaward');?>" class="active">推广收入</a>
                </div>
            </div>
        </div>


        <div class="list-block">
            <ul id="myPurseList">
                <?php if(is_array($list)): foreach($list as $key=>$v): ?><li class="item-content">
                        <div class="item-inner">
                            <div class="item-title center" style="padding:5px 0px;"><?php echo (date('Y-m-d',$v["addtime"])); ?></div>
                            <div class="item-title center" style="padding:5px 0px;"><?php echo ($v["desc"]); ?></div>
                            <div class="item-title center" style="padding:5px 0px;"><?php if($v["adds"] == 0.00): ?>-<?php echo (two_number($v["reduce"])); else: ?>+<?php echo (two_number($v["adds"])); endif; ?></div>
                        </div>
                    </li><?php endforeach; endif; ?>
            </ul>
        </div>
        <div class="center"  id="pages"><?php echo ($page); ?></div>
    </div>

</div>

        </div>
      </div> 
    </div> 
  






</body></html>