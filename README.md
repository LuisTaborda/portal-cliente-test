# CSS Flexbox

## Conceito Box Model

- Tudo é interpretado como uma **box**

- Uma **box** tem uma **_propriedade_** chamada "display: block"

- **Block** -> Sua propriedade width (largura) vai ocupar todo o espaço disponível em tela

- **Inline** -> tamanho (width) do elemento seja o tamanho do conteúdo

- _Conceito de caixas dentro de outras caixas_ ->

## Propriedades

### display

```css
.container {
  display: flex; /* or inline-flex */
}
```

## flex-direction

```css
.flex-container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

## flex-wrap

```css
.flex-container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

## justify-content

```css
.flex-container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
}
```

## align-items

```css
.flex-container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

## align-content

```css
.flex-container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

## Propriedades para elementos-filhos

### flex-grow
```css
.flex-item {
  flex-grow: <numero>; /* o valor default(padrão) é 0 */
}
```

### flex-shrink
```css
  .flex-item {
    flex-shrink: <número>; /* o valor padrão é 0 */
  }
```
### Material Referência
#### [Flexbox CSS: Guia Completo, Elementos e Exemplos](https://www.alura.com.br/artigos/css-guia-do-flexbox?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20987928442&hsa_grp=157916200306&hsa_ad=689395782879&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lScBlZzps5VuGpGXFDbpAJ_CxLiJOm1JuqovzW3-ZW-a2oT0K-XOJgxoCH1cQAvD_BwE) 

### Videos de referência

#### [DESCOMPLICANDO o CSS Flexbox 🤯](https://www.youtube.com/watch?v=gOMK_xruAqc)

#### [Descomplicando CSS Grid (na prática!) | com Mayk Brito](https://www.youtube.com/watch?v=lh0qB15vRoo)


<!-- Display Flex
	justify-content -> onde o elemento começa
		flex-start - default
		flex-end - final da tela
		space-around - espaço ao redor
		space-between - espaço entre os elementos
		space-evenly - espaço constante entre elementos

	align-items -> alinhar no meio (eixo principal)
		flex-start
		flex-end
		center

	gap: 1rem (10 px) -> não necessário margin
-->
