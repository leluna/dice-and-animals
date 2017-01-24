(ns core)

(enable-console-print!)

(defonce check-sheet (atom (list {:sheet {:crocodile 0 :elephant 0 :lion 0}
                                  :animal :lion
                                  :dice [1 1]})))

(defn mark [current dice animal]
  (let [next-sheet (update (:sheet (first current)) animal inc)
        hitem {:sheet next-sheet :dice dice :animal animal}]
    (conj current hitem)))

(defn die []
  (inc (rand-int 6)))
(defn parity [w]
  (if (even? w) :even :odd))
(def animal {[:even :odd] :crocodile
           [:odd :even] :crocodile
           [:odd :odd] :lion
           [:even :even] :elephant})
(defn rollDice []
  (let [dice (repeatedly 2 die)
        a (->> dice (map parity) animal)]
           (clj->js (swap! check-sheet mark dice a))))


