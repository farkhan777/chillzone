<template>
    <div>
        
    <div>
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu" >
        <div class="_1side_menu_logo">
          <!-- <h3 style="text-align:center;">Logo Image</h3> -->
          <!-- <img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/> -->
          <img style="width: 108px; margin-left: 68px;" src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/178400701_521250482378042_5204564419246067314_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=HBGk95FDsf0AX-S5Iko&_nc_ht=scontent-sin6-1.xx&oh=1cb7f0a7aa615445faee5d0a5012d692&oe=60AEF817" alt="logo">
        </div>

        <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
        <div class="_1side_menu_content">
          <div class="_1side_menu_img_name">
            <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
            <p class="_1side_menu_name">Admin</p>
          </div>

          <!--~~~ MENU LIST ~~~~~~-->
          <div class="_1side_menu_list">
            <ul class="_1side_menu_list_ul">
              <li><router-link to="/"><Icon type="ios-speedometer" /> Dashboard</router-link></li>

              <li><router-link to="tags"><Icon type="ios-speedometer" /> Tags</router-link></li>

              <li><router-link to="category"><Icon type="ios-speedometer" /> Category</router-link></li>

              <li><router-link to="createBlog"><Icon type="ios-speedometer" /> Create blogs</router-link></li>

              <li><router-link to="adminusers"><Icon type="ios-speedometer" /> Admin users</router-link></li>

              <li><router-link to="role"><Icon type="ios-speedometer" /> Role management</router-link></li>

              <li><router-link to="assignRole"><Icon type="ios-speedometer" /> Assign role</router-link></li>

              <li><a href="/logout"><Icon type="ios-speedometer" /> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--========== ADMIN SIDE MENU ========-->

      <!--========= HEADER ==========-->
      <div class="header">
        <div class="_2menu _box_shadow">
          <div class="_2menu_logo">
            <ul class="open_button">
              <li>
                <Icon type="ios-list" />
              </li>
              <!--<li><Icon type="ios-albums" /></li>-->
            </ul>
          </div>
        </div>
      </div>
      <!--========= HEADER ==========-->
    </div>
    	<router-view/>
    </div>
</template>