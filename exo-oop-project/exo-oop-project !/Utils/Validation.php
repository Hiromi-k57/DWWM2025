<?php 

class Validation{
    //staticメソッドとは、クラスに属するメソッドで、インスタンス化（newでオブジェクトを作成）しなくても呼び出せるメソッド, インスタンス（$obj = new Validation();）を作らずに使える
    static function clean($str){
        $str = trim($str); // 文字列の先頭と末尾の空白文字（スペースや改行など）を削除
        $str = stripcslashes($str);// バックスラッシュ（\）を削除。エスケープされた文字列を元に戻す
        $str = htmlspecialchars($str);// 特殊文字（<, >, &, ", ' など）をHTMLエンティティに変換  // XSS（クロスサイトスクリプティング）対策
        return $str;
    }

    static function name($str){
        # Lettre only
        $name_regex = "/^([a-zA-Z' ]+)$/";
        if (preg_match($name_regex, $str)) 
            return true;
        else return false;

    }

}
?>