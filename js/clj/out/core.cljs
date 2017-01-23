(ns core)

(enable-console-print!)

(defn rollDice [] (clj->js (take 2 (repeatedly #(rand-int 6)))))