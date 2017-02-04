(ns core)

(enable-console-print!)

(defn parity [w]
  (if (even? w) :even :odd))

(defn die []
  (inc (rand-int 6)))

(def animal {[:even :odd]  :crocodile
             [:odd  :even] :crocodile
             [:odd  :odd]  :lion
             [:even :even] :elephant})

(defonce state (atom (list {:sheet  {:crocodile 0 :elephant 0 :lion 0}
                            :animal :lion
                            :dice   [1 1]})))
							
(defn mark [states dice animal]
  (let [next-sheet (update (:sheet (first states)) animal inc)
        next-state {:sheet next-sheet :dice dice :animal animal}]
    (conj states next-state)))
		   
(defn rollDice []
  (let [dice (repeatedly 2 die)
        a (->> dice (map parity) animal)]
           (clj->js (swap! state mark dice a))))