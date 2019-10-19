"List comprehensions" pueden tener más de un "for" o "if" cláusulas:

[
(x, y) 
for x in range(5) 
for y in range (x + 2) 
if x != 3 
if y != x
]

#Python #UsoResponsable
