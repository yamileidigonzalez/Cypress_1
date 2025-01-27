Feature: Operaciones CRUD en el módulo Monitorización

  Como administrador del sistema bancario
  Quiero realizar operaciones CRUD en las entidades del módulo Monitorización
  Para asegurar que todo funcione correctamente

  Scenario Outline: Probar CRUD para <entidad>
    Given que estoy autenticado como administrador
    When accedo al módulo Monitorización y selecciono la entidad "<entidad>"
    Then debería poder crear un nuevo registro correctamente
    And debería poder visualizar los registros existentes
    And debería poder actualizar un registro correctamente
    And debería poder eliminar un registro correctamente

    Examples:
      | entidad            |
      | Acciones de alarmas |
      | Config. de alarmas  |
