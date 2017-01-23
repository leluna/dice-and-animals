(require 'cljs.build.api)

(cljs.build.api/build "src" 
  {:main 'core
   :asset-path "js/clj/out"
   :output-to "../core.js"})