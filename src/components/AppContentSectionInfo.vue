<template>
  <div class="layout__info-wrapper" style="justify-content: center; text-align: center;">
    <p>На данном этапе, после ввода содержимого, вы можете сразу же перейти к следующему шагу и сгенерировать штрих-коды с настройками по-умолчанию</p>
    <div class="_or"><strong>и л и</strong></div>
    <div class="_button-wrapper">
      <button
        @click.prevent="$emit('gen-ex')"
        class="_btn"
        :disabled="!inputLengthHandler"
      >Включить расширенные настройки</button>
    </div>
    <p>И в режиме реального времени настроить цвет заднего фона, самого штрих-кода, а также скрыть отображение текста/кода, если будет нужно</p>
    <div class="_small-text" style="display: flex; justify-content: center">
      <p>*&nbsp;</p><small>Все изменения сразу же вступят в силу для последующих штрих-кодов<br>(Только для графического формата)</small>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['gen-ex'],
  props: ['inputLengthHandler']
}
</script>
