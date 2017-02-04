(ns dict)

(enable-console-print!)

(def animal-de {"crocodile"  "das Krokodil"
                "lion"       "der Löwe"
                "elephant"   "der Elefant"})
				
(defn translate [a] (animal-de a))