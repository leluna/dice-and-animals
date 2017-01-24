// Compiled by ClojureScript 1.9.293 {}
goog.provide('core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof core.check_sheet !== 'undefined'){
} else {
core.check_sheet = cljs.core.atom.call(null,(function (){var x__3686__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sheet","sheet",-2059155794),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"crocodile","crocodile",-489076971),(0),new cljs.core.Keyword(null,"elephant","elephant",-1725469300),(0),new cljs.core.Keyword(null,"lion","lion",1707241445),(0)], null),new cljs.core.Keyword(null,"animal","animal",-1445940363),new cljs.core.Keyword(null,"lion","lion",1707241445),new cljs.core.Keyword(null,"dice","dice",707777434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__3686__auto__);
})());
}
core.mark = (function core$mark(current,dice,animal){
var next_sheet = cljs.core.update.call(null,new cljs.core.Keyword(null,"sheet","sheet",-2059155794).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,current)),animal,cljs.core.inc);
var hitem = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sheet","sheet",-2059155794),next_sheet,new cljs.core.Keyword(null,"dice","dice",707777434),dice,new cljs.core.Keyword(null,"animal","animal",-1445940363),animal], null);
return cljs.core.conj.call(null,current,hitem);
});
core.die = (function core$die(){
return (cljs.core.rand_int.call(null,(6)) + (1));
});
core.parity = (function core$parity(w){
if(cljs.core.even_QMARK_.call(null,w)){
return new cljs.core.Keyword(null,"even","even",-275845692);
} else {
return new cljs.core.Keyword(null,"odd","odd",-1213409872);
}
});
core.animal = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"even","even",-275845692),new cljs.core.Keyword(null,"odd","odd",-1213409872)], null),new cljs.core.Keyword(null,"crocodile","crocodile",-489076971),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"odd","odd",-1213409872),new cljs.core.Keyword(null,"even","even",-275845692)], null),new cljs.core.Keyword(null,"crocodile","crocodile",-489076971),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"odd","odd",-1213409872),new cljs.core.Keyword(null,"odd","odd",-1213409872)], null),new cljs.core.Keyword(null,"lion","lion",1707241445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"even","even",-275845692),new cljs.core.Keyword(null,"even","even",-275845692)], null),new cljs.core.Keyword(null,"elephant","elephant",-1725469300)], true, false);
core.rollDice = (function core$rollDice(){
var dice = cljs.core.repeatedly.call(null,(2),core.die);
var a = core.animal.call(null,cljs.core.map.call(null,core.parity,dice));
return cljs.core.clj__GT_js.call(null,cljs.core.swap_BANG_.call(null,core.check_sheet,core.mark,dice,a));
});

//# sourceMappingURL=core.js.map