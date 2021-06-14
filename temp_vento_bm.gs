'reinit'
'set display color white'
'c'
'sdfopen ERA5_bm.nc'
*
*setando os valores de referencia
'set lat -24.3 -23.2' 
'set lon -47 -45.7'
'set z 1'
*
tempo = 1
while (tempo <= 10)
'set t 'tempo
*
*Comando para ajustar a altura, largura da imagem e o tipo de grÃ¡fico
'set parea 1 10 1 8'
*
'q dims'
lin=sublin(result,5)
dh=subwrd(lin,6)
hora=substr(dh,1,3)
data=substr(dh,4,9)
say data
*
*plotando temperatura e Vento em 1000 hPa
'set gxout shaded'
*em 1000hpa  15.6 21.6
*'color 15.6 21.6 0.4 -kind royalblue->antiquewhite->tomato'
'd t-273.15'
'cbar'
'set gxout vector'
'set arrlab on'
*set arrscl valor mag. valor deve ser entre 0.5 a 1. Já a magnitude depende dos valores dos dados em análise.
'set arrscl 1 10'
'set ccolor 1'
'd u;v'
'set line 1'
'draw shp 35MUE250GC_SIR'
*colocando legenda e salvando as imagens
'draw title Temperatura e Vento em 1000 hPa - 'data''hora''
'draw xlab Longitude'
'draw ylab Latitude'
'printim era5/teste'data''hora'_era5.png'
'c'
tempo = tempo + 1
endwhile
