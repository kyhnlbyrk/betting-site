# betting-site

Canlı preview linki: https://betting-site-six.vercel.app/ 

NextJS ile yazılmış olup, `getStaticProps` kullanılmıştır.

## Kurulum

Projeyi cloneladıntan sonra

`yarn`

sonrasında 

`yarn dev`

çalıştırarak projeyi localinizde ayağa kaldırabilirsiniz 

http://localhost:3000/

adresinde kalkacaktır.

## Performans İyileştirmeleri

1) `getStaticProps` kullanıldığı için sayfa ilk başka build aşamasında be html olarak disk te duruyor. Sonrasında bu html server ediliyor client tarafına böylelikle sayfa ilk yüklenirken datanın çekilmesini beklemiyoruz. Kullanıcı 

2) Infinite scroll - Veriyi 100'er 100'er bölüp ekrana basıyoruz. Scroll aşağıya kaydıkça yeni veriyi yüklüyor. 

3) `memo` - Componentleri memoize edip propları değişmediği sürece rerender olmasını engelledim. Böylelik bir hücreye tıklandığında sadece 2 hücre rerender oluyor active durumunu kaybeden ve active olan.
