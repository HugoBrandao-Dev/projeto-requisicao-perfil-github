/*
	PROJETO REQUISIÇÃO PERFIL GITHUB
*/
let btnBuscar = document.querySelector('button#btn-buscar')
let sectionUsuarios = document.querySelector('section#usuarios')

btnBuscar.addEventListener('click', buscarUsuario)

function isLoginValido(login) {
	if (login.length === 0) {
		return false
	}
	return true
}

function criarElementoHTML(tag) {
	let elemento = document.createElement(tag.tipo)
	elemento.innerHTML = tag.conteudo ? tag.conteudo : ''
	let temAtributos = tag.atributos ? true: false
	if (temAtributos) {
		let atributos = tag.atributos
		for (let chave in atributos) {
			let valor = atributos[chave]
			elemento.setAttribute(`${ chave }`, `${ valor }`)
		}
	}
	return elemento
}

function adicionarElementosFilhos(elementoPai, elementoFilhos) {
	let pai = elementoPai
	for (indice in elementoFilhos) {
		let filho = elementoFilhos[indice]
		pai.appendChild(filho)
	}
	return pai
}

function gerarNovoCartao(usuario) {
	let nome = usuario.name ? usuario.name : 'N/A'
	let imagemPerfil = usuario.avatar_url ? usuario.avatar_url : 'N/A'
	let perfilGithub = usuario.html_url ? usuario.html_url : 'N/A'
	let sobre = usuario.bio ? usuario.bio : 'N/A'

	let h2Nome = criarElementoHTML({
		tipo: 'h2',
		conteudo: nome
	})
	let imgPerfil = criarElementoHTML({
		tipo: 'img',
		atributos: {
			src: imagemPerfil,
			alt: `Foto de perfil de ${ nome }.`,
			title: `Foto de perfil de ${ nome }.`
		}
	})
	let divSobre = criarElementoHTML({
		tipo: 'div',
		atributos: {
			class: 'sobre'
		}
	})
	let pDescricao = criarElementoHTML({
		tipo: 'p',
		conteudo: sobre
	})
	let aPerfil = criarElementoHTML({
		tipo: 'a',
		conteudo: 'Perfil no GitHub',
		atributos: {
			href: perfilGithub,
			target: '_blank'
		}
	})

	let articleUsuario = criarElementoHTML({
		tipo: 'article',
		atributos: {
			class: 'usuario'
		}
	})
	divSobre = adicionarElementosFilhos(divSobre, [pDescricao, aPerfil])
	articleUsuario = adicionarElementosFilhos(articleUsuario, [h2Nome, imgPerfil, divSobre])
	return articleUsuario
}

function buscarUsuario() {
	let inputUsuario = document.getElementsByName('ipt-usuario')[0]
	let usuario = inputUsuario.value


	if (isLoginValido(usuario)) {
		let URLRequisicao = `https://api.github.com/users/${ usuario }`

		let requisicao = new XMLHttpRequest()
		requisicao.open('GET', URLRequisicao)
		requisicao.responseType = 'json'
		requisicao.send()
		requisicao.onload = function() {
			let usuario = requisicao.response
			let cartaoUsuario = gerarNovoCartao(usuario)
			sectionUsuarios.innerHTML = ''
			sectionUsuarios.appendChild(cartaoUsuario)
		}
		inputUsuario.focus()
	} else {
		alert('Informe um login válido para a busca.')
	}
}