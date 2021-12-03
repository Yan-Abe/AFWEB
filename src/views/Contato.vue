<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="9"
    >
      <v-card>
        <v-card-title class="black">
          <span class="text-h5 white--text">Equipe MyEvents</span>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>+55 15 3238 1188</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>15 98154.7777</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>myevent@facens.br</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sorocaba</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-img
          src="https://www.serro.mg.gov.br/fotos/b4d80b98de6ea9bb73c2ee183bad5ad2.jpg"
          height="500px"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
