/**
 * @fileOverview root node represent a check tree
 * @author yiminghe@gmail.com
 */
KISSY.add("tree/checktree", function(S,  Component, CheckNode, CheckTreeRender, TreeMgr) {
    var CHECK_TREE_CLS = CheckTreeRender.CHECK_TREE_CLS;
    /*多继承*/
    var CheckTree = Component.define(CheckNode, [Component.DelegateChildren,TreeMgr], {
    }, {
        DefaultRender:CheckTreeRender
    });

    Component.UIStore.setUIConstructorByCssClass(CHECK_TREE_CLS, {
        priority:Component.UIStore.PRIORITY.LEVEL4,
        ui:CheckTree
    });

    return CheckTree;

}, {
    requires:['component','./checknode','./checktreerender','./treemgr']
});